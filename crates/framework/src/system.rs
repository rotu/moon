use std::any::TypeId;

pub trait System: Send + Sync + 'static {
    type In;
    type Out;

    /// Returns the [`TypeId`] of the underlying system type.
    fn type_id(&self) -> TypeId;

    /// Runs the system with the given input in the world.
    fn run(&mut self, input: Self::In) -> Self::Out;
}

/// This must only be implemented for system types which do not mutate the app.
pub unsafe trait ReadOnlySystem: System {}

/// A convenience type alias for a boxed [`System`] trait object.
pub type BoxedSystem<In = (), Out = ()> = Box<dyn System<In = In, Out = Out>>;

/// Conversion trait to turn something into a [`System`].
pub trait IntoSystem<In, Out, Marker>: Sized {
    type System: System<In = In, Out = Out>;

    /// Turns this value into its corresponding [`System`].
    fn into_system(this: Self) -> Self::System;
}

// Systems implicitly implement IntoSystem.
impl<In, Out, Sys: System<In = In, Out = Out>> IntoSystem<In, Out, ()> for Sys {
    type System = Sys;

    fn into_system(this: Self) -> Sys {
        this
    }
}
