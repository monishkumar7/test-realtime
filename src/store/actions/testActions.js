export const addData = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection('projects')
      .add(data)
      .then(data => console.log(data, data.id))
      .catch(err => console.log(err));
  };
};

export const listenChanges = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore.collection('projects').onSnapshot(colRef => {
      colRef.forEach(doc => console.log(doc.data()));
    });
  };
};

export const newPage = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log('Button Clicked');
    const fireStore = getFirestore();
    let newDocRef = fireStore.collection('ids').doc();
    newDocRef.set({ title: 'me', content: 'Nope', date: new Date() });
    dispatch({ type: 'NEW_SHARE', id: newDocRef.id });
  };
};
