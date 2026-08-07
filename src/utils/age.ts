const BIRTH_DATE = new Date(2001, 7, 8); // 08/08/2001

export function getAge(): number {
  const now = new Date();
  let age = now.getFullYear() - BIRTH_DATE.getFullYear();
  const hasHadBirthdayThisYear =
    now.getMonth() > BIRTH_DATE.getMonth() ||
    (now.getMonth() === BIRTH_DATE.getMonth() && now.getDate() >= BIRTH_DATE.getDate());
  if (!hasHadBirthdayThisYear) age -= 1;
  return age;
}
