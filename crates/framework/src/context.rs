use rustc_hash::FxHashMap;
use std::any::Any;

#[derive(Default)]
pub struct AppContext {
    resources: FxHashMap<String, String>,
}

pub trait FromAppContext {
    fn from_context(context: &AppContext) -> Self;
}

#[derive(Debug)]
pub struct Res(pub String);

impl FromAppContext for Res {
    fn from_context(context: &AppContext) -> Self {
        Res("foo".into())
    }
}

pub trait System {
    fn call(&self, context: &AppContext);
}

impl<F> System for F
where
    F: Fn(),
{
    fn call(&self, context: &AppContext) {
        (self)();
    }
}

// impl<F, T1> System<T1> for F
// where
//     F: Fn(T1),
//     T1: FromAppContext,
// {
//     fn call(self, context: &AppContext) {
//         (self)(T1::from_context(&context));
//     }
// }

// impl<F, T1, T2> System<(T1, T2)> for F
// where
//     F: Fn(T1, T2),
//     T1: FromAppContext,
//     T2: FromAppContext,
// {
//     fn call(self, context: &AppContext) {
//         (self)(T1::from_context(&context), T2::from_context(&context));
//     }
// }

// impl<F, T1, T2, T3> System<(T1, T2, T3)> for F
// where
//     F: Fn(T1, T2, T3),
//     T1: FromAppContext,
//     T2: FromAppContext,
//     T3: FromAppContext,
// {
//     fn call(self, context: &AppContext) {
//         (self)(
//             T1::from_context(&context),
//             T2::from_context(&context),
//             T3::from_context(&context),
//         );
//     }
// }

// pub type BoxedSystem<T = ()> = Box<dyn System<T>>;

pub type BoxedSystem = Box<dyn System>;

pub struct SystemCaller {
    system: BoxedSystem,
}

impl SystemCaller {
    pub fn call(self, context: &AppContext) {
        self.system.call(context);
    }
}

pub trait IntoSystemCaller {
    fn into_system_caller(self) -> SystemCaller;
}

impl<F> IntoSystemCaller for F
where
    F: Fn(),
{
    fn into_system_caller(self) -> SystemCaller {
        SystemCaller {
            system: Box::new(self),
        }
    }
}
