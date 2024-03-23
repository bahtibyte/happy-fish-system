use esp_idf_svc::nvs::{EspDefaultNvsPartition, EspNvs, EspNvsPartition, NvsDefault};

use crate::hf::network;

pub fn run() {
    log::info!("Fish is running");

    let partition: EspNvsPartition<NvsDefault> =
        EspDefaultNvsPartition::take().expect("NVS is required.");

    let namespace = "happy_fish";
    let _nvs = match EspNvs::new(partition, namespace, true) {
        Ok(nvs) => {
            log::info!("Obtained namespace {} from partition.", namespace);
            nvs
        }
        Err(e) => {
            panic!("Could not obtain namespace {}. Err {:?}", namespace, e);
        }
    };

    log::info!("Code complete... What do we do now?");

    // Debugging.
    network::log_wifi_config();
}
