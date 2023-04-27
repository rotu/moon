use notify_rust::Notification;

pub fn send_notification<M>(message: M)
where
    M: AsRef<str>,
{
    send_notification_with_title("", message)
}

pub fn send_notification_with_title<T, M>(title: T, message: M)
where
    T: AsRef<str>,
    M: AsRef<str>,
{
    let title = title.as_ref();
    let mut note = Notification::new();

    note.body(message.as_ref());

    if !title.is_empty() {
        note.summary(title);
    }

    note.show().unwrap();
}
