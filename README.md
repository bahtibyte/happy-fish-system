# Happy Fish System

## Applications

### ESP32

#### Arduino + CPP
```
idf.py build
idf.py flash
idf.py monitor
```

#### Rust
```
get_esprs
cargo build
cargo espflash flash ~/happy-fish-system/applications/esp32/rs/target/xtensa-esp32-espidf/debug/rs
cargo espflash monitor
```

## Client
```
cd client
npm install
npm run dev
```