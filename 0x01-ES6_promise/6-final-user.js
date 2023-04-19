import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          console.log(`${value.value.firstName} ${value.value.lastName}`);
        } else {
          console.log(`${value.reason.message}`);
        }
      });
    });
}
