try {
  try {
    throw new Error('oops');
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// finally
// outer oops

try {
  try {
    throw new Error('oops');
  } catch (err) {
    console.log('ddd');
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// ddd
// finally

try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// inner opps
// finally

try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  } finally {
    console.log('finally');
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// inner oops
// finally
// outer oops
