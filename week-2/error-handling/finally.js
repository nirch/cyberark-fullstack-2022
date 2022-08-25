function openAndWriteToFile(file, data) {
  try {
    const myFile = open(file);
    try {
      myFile.write(data);
    } catch (err) {
      // due to write
    } finally {
      myFile.close();
    }
  } catch (err) {
    // due to open
  }
}
