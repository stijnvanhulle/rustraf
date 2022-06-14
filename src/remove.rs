#[napi]
fn remove(dir_or_file: String) -> bool {
  println!("{:?}", std::env::current_exe());
  rm_rf::remove(dir_or_file).expect("Folder/file delete failed");
  true
}
