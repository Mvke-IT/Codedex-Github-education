for(let m = 1; m < 50; m++)
    {
      if(m % 2 !== 0) 
      {
        continue;
      }
      console.log(m);
      if(m == 42) {
        console.log("Found 42");
        break;
      }
    }