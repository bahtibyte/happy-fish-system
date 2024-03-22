fn main() {
    // File `cfg.toml` must exist and needs to filled out.
    if !std::path::Path::new("cfg.toml").exists() {
        panic!("You need to create a `cfg.toml` file with your setup credentials!")
    }

    embuild::espidf::sysenv::output();
}
