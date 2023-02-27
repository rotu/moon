use framework::{App, Error};

fn setup_test() -> Result<(), Error> {
    println!("setup_test");

    Ok(())
}

fn another_setup() -> Result<(), Error> {
    println!("another_setup");

    Ok(())
}

fn should_analyze() -> Result<(), Error> {
    println!("should_analyze");

    Ok(())
}

#[tokio::main]
async fn main() {
    let mut app = App::new()
        .add_analyzer(should_analyze)
        .add_initializer(setup_test)
        .add_initializer(another_setup);

    let r = app.run().await.unwrap();

    dbg!(r);
}
