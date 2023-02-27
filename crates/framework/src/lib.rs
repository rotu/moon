pub use core::future::Future;
use core::ops::DerefMut;
use core::pin::Pin;
use core::task::{Context, Poll};

pub type Error = Box<dyn std::error::Error>;

pub type BoxFuture<'a, T> = Pin<Box<dyn Future<Output = T> + Send + 'a>>;
pub type System = dyn FnOnce() -> Result<(), Error>;

pub enum Phase {
    Initialize,
    Analyze,
    Execute,
    Finalize,
}

pub struct App {
    analyzers: Vec<Box<System>>,
    executors: Vec<Box<System>>,
    finalizers: Vec<Box<System>>,
    initializers: Vec<Box<System>>,
}

impl App {
    pub fn new() -> Self {
        App {
            analyzers: vec![],
            executors: vec![],
            finalizers: vec![],
            initializers: vec![],
        }
    }

    pub fn add_analyzer<S>(mut self, system: S) -> Self
    where
        S: FnOnce() -> Result<(), Error> + 'static,
        // S: FnOnce() -> F,
        // F: Future<Output = ()>,
    {
        self.analyzers.push(Box::new(system));
        self
    }

    pub fn add_executor<S>(mut self, system: S) -> Self
    where
        S: FnOnce() -> Result<(), Error> + 'static,
        // S: FnOnce() -> F,
        // F: Future<Output = ()>,
    {
        self.executors.push(Box::new(system));
        self
    }

    pub fn add_finalizer<S>(mut self, system: S) -> Self
    where
        S: FnOnce() -> Result<(), Error> + 'static,
        // S: FnOnce() -> F,
        // F: Future<Output = ()>,
    {
        self.finalizers.push(Box::new(system));
        self
    }

    pub fn add_initializer<S>(mut self, system: S) -> Self
    where
        S: FnOnce() -> Result<(), Error> + 'static,
        // S: FnOnce() -> F,
        // F: Future<Output = ()>,
    {
        self.initializers.push(Box::new(system));
        self
    }

    pub async fn run(&mut self) -> Result<(), Error> {
        self.run_initializers().await?;
        self.run_analyzers().await?;

        let result = self.run_executors().await;

        // Run finalizers whether a success or failure
        self.run_finalizers().await?;

        // Return the result and handle a possible failure
        result
    }

    // PRIVATE

    async fn run_analyzers(&mut self) -> Result<(), Error> {
        for analyzer in self.analyzers.drain(0..) {
            analyzer()?;
        }

        Ok(())
    }

    async fn run_executors(&mut self) -> Result<(), Error> {
        // TODO parallel
        for analyzer in self.executors.drain(0..) {
            analyzer()?;
        }

        Ok(())
    }

    async fn run_finalizers(&mut self) -> Result<(), Error> {
        // TODO parallel
        for analyzer in self.finalizers.drain(0..) {
            analyzer()?;
        }

        Ok(())
    }

    async fn run_initializers(&mut self) -> Result<(), Error> {
        for initializer in self.initializers.drain(0..) {
            initializer()?;
        }

        Ok(())
    }
}
