const convertDate = date => {
  const year = parseInt(date.substr(0, 4), 10);
  const month = parseInt(date.substr(5, 2), 10);
  const day = parseInt(date.substr(8, 2), 10);
  return { year, month, day };
};

export const isValidDate = (startDate, endDate) => {
  const syear = convertDate(startDate).year;
  const smonth = convertDate(startDate).month;
  const sday = convertDate(startDate).day;
  const eyear = convertDate(endDate).year;
  const emonth = convertDate(endDate).month;
  const eday = convertDate(endDate).day;
  if (syear <= eyear && smonth <= emonth && sday <= eday) {
    return true;
  }
  return false;
};

export const duplicateBooking = (booking, bookings) => {
  const bookingSyear = convertDate(booking.start_date).year;
  const bookingSmonth = convertDate(booking.start_date).month;
  const bookingSday = convertDate(booking.start_date).day;

  const bookingEndyear = convertDate(booking.end_date).year;
  const bookingEndmonth = convertDate(booking.end_date).month;
  const bookingEndday = convertDate(booking.end_date).day;

  bookings.map(book => {
    const bookSyear = convertDate(book.start_date).year;
    const bookSmonth = convertDate(book.start_date).month;
    const bookSday = convertDate(book.start_date).day;

    const bookEndyear = convertDate(book.end_date).year;
    const bookEndmonth = convertDate(book.end_date).month;
    const bookEndday = convertDate(book.end_date).day;

    // if (book.car_id === booking.car_id) {
    //   if ((booking.start_date <= book.end_date
    //     && booking.start_date >= book.start_date)
    //     || (booking.end_date <= book.end_date
    //     && booking.end_date >= book.start_date)) {
    //     return true;
    //   }
    // }
    // return false;
    if (book.car_id === booking.car_id) {
      if ((bookingSday <= bookEndday && bookingSday >= bookSday)
        || (bookingEndday <= bookEndday && bookingEndday >= bookSday)) {
        if ((bookingSmonth <= bookEndmonth && bookingSmonth >= bookSmonth)
        || (bookingEndmonth <= bookEndmonth && bookingEndmonth >= bookSmonth)) {
          if ((bookingSyear <= bookEndyear && bookingSyear >= bookSyear)
          || (bookingEndyear <= bookEndyear && bookingEndyear >= bookSyear)) {
            return true;
          }
        }
      }
    }
    // if (book.car_id === booking.car_id) {
    //   if ((
    //     (bookingSyear <= bookEndyear && bookingSmonth <= bookEndmonth && bookingSday
    //        <= bookEndday)
    //     && (bookingSyear >= bookSyear && bookingSmonth >= bookSmonth && bookingSday >= bookSday))
    //     || ((bookingEndyear <= bookEndyear && bookingEndmonth <= bookEndmonth
    //       && bookingEndday <= bookEndday)
    //     && (bookingEndyear >= bookSyear && bookingEndmonth >= bookSmonth
    //       && bookingEndday >= bookSday))) {
    //     return true;
    //   }
    // }
    return false;
  });
};

export const availableDates = (booking, bookings) => {
  const bookingSyear = convertDate(booking.start_date).year;
  const bookingSmonth = convertDate(booking.start_date).month;
  const bookingSday = convertDate(booking.start_date).day;

  const bookingEndyear = convertDate(booking.end_date).year;
  const bookingEndmonth = convertDate(booking.end_date).month;
  const bookingEndday = convertDate(booking.end_date).day;

  //   if ((booking.start_date <= book.end_date
  //     && booking.start_date >= book.start_date)
  //     || (booking.end_date <= book.end_date && booking.end_date >= book.start_date)) {
  //     return false;
  //   }
  //   return true;

  bookings.map(book => {
    const bookSyear = convertDate(book.start_date).year;
    const bookSmonth = convertDate(book.start_date).month;
    const bookSday = convertDate(book.start_date).day;

    const bookEndyear = convertDate(book.end_date).year;
    const bookEndmonth = convertDate(book.end_date).month;
    const bookEndday = convertDate(book.end_date).day;

    if (((bookingSyear <= bookEndyear && bookingSmonth <= bookEndmonth && bookingSday <= bookEndday)
      && (bookingSyear >= bookSyear && bookingSmonth >= bookSmonth && bookingSday >= bookSday))
      || ((bookingEndyear <= bookEndyear && bookingEndmonth <= bookEndmonth
        && bookingEndday <= bookEndday)
      && (bookingEndyear >= bookSyear && bookingEndmonth >= bookSmonth
        && bookingEndday >= bookSday))) {
      return false;
    }
    return true;
  });
};
