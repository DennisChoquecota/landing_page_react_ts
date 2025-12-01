function isEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getMonthYearFromTimestamp(timestamp: string): string {
  console.log(timestamp);
  const date = new Date(Number(timestamp));
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("en-US", options);
}

function isSwiperLoop(itemsLength: number, minLength: number = 4): boolean {

  let loop = true;

  if (window.innerWidth >= 640 && itemsLength <= 2) {
    loop = false;
  }
  else if (window.innerWidth >= 1024 && itemsLength <= 3) {
    loop = false;
  }
  else if (window.innerWidth >= 1280 && itemsLength <= minLength) {
    loop = false;
  }
  return loop;
}

export { isEmailValid, getMonthYearFromTimestamp, isSwiperLoop };
