mod context;
// mod resource;
// mod system;

pub use core::future::Future;
use core::ops::DerefMut;
use core::pin::Pin;
use core::task::{Context, Poll};

use context::AppContext;

pub use context::*;

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
    analyzers: Vec<SystemCaller>,
    context: AppContext,
    executors: Vec<SystemCaller>,
    finalizers: Vec<SystemCaller>,
    initializers: Vec<SystemCaller>,
}

impl App {
    pub fn new() -> Self {
        App {
            analyzers: vec![],
            context: AppContext::default(),
            executors: vec![],
            finalizers: vec![],
            initializers: vec![],
        }
    }

    pub fn add_analyzer(mut self, system: impl IntoSystemCaller) -> Self {
        self.analyzers.push(system.into_system_caller());
        self
    }

    pub fn add_executor(mut self, system: impl IntoSystemCaller) -> Self {
        self.executors.push(system.into_system_caller());
        self
    }

    pub fn add_finalizer(mut self, system: impl IntoSystemCaller) -> Self {
        self.finalizers.push(system.into_system_caller());
        self
    }

    pub fn add_initializer(mut self, system: impl IntoSystemCaller) -> Self {
        self.initializers.push(system.into_system_caller());
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
            analyzer.call(&self.context);
        }

        Ok(())
    }

    async fn run_executors(&mut self) -> Result<(), Error> {
        // TODO parallel
        for analyzer in self.executors.drain(0..) {
            analyzer.call(&self.context);
        }

        Ok(())
    }

    async fn run_finalizers(&mut self) -> Result<(), Error> {
        // TODO parallel
        for analyzer in self.finalizers.drain(0..) {
            analyzer.call(&self.context);
        }

        Ok(())
    }

    async fn run_initializers(&mut self) -> Result<(), Error> {
        for initializer in self.initializers.drain(0..) {
            initializer.call(&self.context);
        }

        Ok(())
    }
}
