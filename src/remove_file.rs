use std::fs;

#[napi]
fn remove_file(path: String) -> bool {
  println!("{:?}", std::env::current_exe());
  fs::remove_file(path).expect("File delete failed");
  true
}
