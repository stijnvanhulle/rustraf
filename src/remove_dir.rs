use std::fs;

#[napi]
fn remove_dir(dir: String) -> bool {
  println!("{:?}", std::env::current_exe());
  fs::remove_dir_all(dir).expect("Folder delete failed");
  true
}
