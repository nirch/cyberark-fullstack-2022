function onReadInput() {
  //   const inputElement = document.getElementById('my-input') as HTMLInputElement;
  const inputElement = <HTMLInputElement>document.getElementById('my-input');
  alert(inputElement.value);
}
