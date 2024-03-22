mod hf;

fn main() {
    // Necessary to call these first.
    esp_idf_svc::sys::link_patches();
    esp_idf_svc::log::EspLogger::initialize_default();

    log::info!("Hello, Happy Fish!");
    hf::system::run();
}