export const addData = data => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection('projects')
      .add(data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
};
