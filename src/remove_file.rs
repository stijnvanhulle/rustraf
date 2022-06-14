use std::fs;

#[napi]
fn remove_file(file: String) -> bool {
  println!("{:?}", std::env::current_exe());
  fs::remove_file(file).expect("File delete failed");
  true
}
