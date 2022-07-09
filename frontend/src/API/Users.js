
const users = 
[
  {names:'Sweta', ordStatus:'In progress',devAddres:'Deliver at 123, Abc Society, Delhi',
    reminder:'Note- Please call me at my number when you are here. I will be available till 8pm',date:'Friday,22 April'
  },
  {names:'Neeraj', ordStatus:'Canceled',devAddres:'Deliver at 123, Abc Society, Delhi',
    reminder:'Note- Please call me at my number when you are here. I will be available till 8pm',date:'Friday,22 April'
  },
  {names:'Priya', ordStatus:'Delivered',devAddres:'Deliver at 123, Abc Society, Delhi',
   reminder:'Note- Please call me at my number when you are here. I will be available till 8pm',date:'Friday,22 April'
  },
]


export function getUsers() {
    return users;
};
