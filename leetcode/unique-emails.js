const numUniqueEmails = (emails) => {
  const uniqueEmails = {};
  emails.forEach(email => {
    const atIdx = email.indexOf("@");
    const front = email.slice(0, atIdx);
    const back = email.slice(atIdx, -1);
    let newFront = front.split(".").join("");
    if (newFront.includes("+")) {
      const plusIdx = newFront.indexOf("+");
      newFront = newFront.slice(0, plusIdx);
    }
    const newEmail = newFront.concat(back);
    uniqueEmails[newEmail] = true;
  });
  return Object.keys(uniqueEmails).length;
};