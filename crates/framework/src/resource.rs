/// A type that acts as a singleton.
pub trait ResourceInstance: Send + Sync + 'static {}

/// Shared borrow of a [`ResourceInstance`].
#[derive(Clone)]
pub struct Resource<'app, T: ?Sized + ResourceInstance> {
    pub value: &'app T,
}

impl<'app, T: ResourceInstance> Resource<'app, T> {
    pub fn into_inner(self) -> &'app T {
        self.value
    }
}

/// Unique mutable borrow of a [`ResourceInstance`].
pub struct ResourceMut<'app, T: ?Sized + ResourceInstance> {
    pub value: &'app mut T,
}
