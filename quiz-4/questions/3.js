/**
 * Function to get username and total age of user's vehicles
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of objects:
 * [{
 *  userName - string,
 *  totalAgent - number
 * }]
 */

const rawdata = [{
    "createdAt": "2022-04-10T19:06:49.155Z",
    "userName": "Lucius11",
    "isSuspended": false,
    "email": "Maximo_Blick@gmail.com",
    "id": "1",
    "address": [
      {
        "country": "TF",
        "state": "California",
        "city": "North Lilyhaven",
        "zipCode": "95974-7870",
        "id": "1",
        "userId": "1"
      }
    ],
    "vehicle": [
      {
        "vin": "R5APVAX399RP61264",
        "manufacturer": "Volkswagen",
        "model": "A8",
        "type": "Crew Cab Pickup",
        "age": 26,
        "id": "1",
        "userId": "1"
      },
      {
        "vin": "UZ41EWD4F3K270847",
        "manufacturer": "Hyundai",
        "model": "Fortwo",
        "type": "Extended Cab Pickup",
        "age": 79,
        "id": "51",
        "userId": "1"
      },
      {
        "vin": "64KZCNEK15FS57248",
        "manufacturer": "Jaguar",
        "model": "Malibu",
        "type": "Crew Cab Pickup",
        "age": 78,
        "id": "75",
        "userId": "1"
      }
    ]
  },
  {
    "createdAt": "2022-04-10T14:27:49.570Z",
    "userName": "Nicolas.Mayer48",
    "isSuspended": false,
    "email": "Melba.Torp38@gmail.com",
    "id": "2",
    "address": [
      {
        "country": "AO",
        "state": "Minnesota",
        "city": "Hempstead",
        "zipCode": "67028-2668",
        "id": "2",
        "userId": "2"
      }
    ],
    "vehicle": [
      {
        "vin": "Z4KY2UPAKYFF20274",
        "manufacturer": "Rolls Royce",
        "model": "Volt",
        "type": "Hatchback",
        "age": 23,
        "id": "2",
        "userId": "2"
      },
      {
        "vin": "NUH77TSHKVNM72975",
        "manufacturer": "Fiat",
        "model": "LeBaron",
        "type": "Coupe",
        "age": 24,
        "id": "52",
        "userId": "2"
      },
      {
        "vin": "BB91LX5JAACZ87537",
        "manufacturer": "Honda",
        "model": "Aventador",
        "type": "Extended Cab Pickup",
        "age": 70,
        "id": "76",
        "userId": "2"
      }
    ]
  },
  {
    "createdAt": "2022-04-10T09:03:09.694Z",
    "userName": "Demetris_Weissnat77",
    "isSuspended": false,
    "email": "Vivianne.Blick@gmail.com",
    "id": "3",
    "address": [
      {
        "country": "IQ",
        "state": "New Hampshire",
        "city": "North Rubyland",
        "zipCode": "95151-0807",
        "id": "3",
        "userId": "3"
      }
    ],
    "vehicle": [
      {
        "vin": "F4WDADF7VGN124196",
        "manufacturer": "Audi",
        "model": "Golf",
        "type": "Extended Cab Pickup",
        "age": 3,
        "id": "3",
        "userId": "3"
      },
      {
        "vin": "BZNPK428Y8BG70515",
        "manufacturer": "Ferrari",
        "model": "Fiesta",
        "type": "Hatchback",
        "age": 38,
        "id": "53",
        "userId": "3"
      },
      {
        "vin": "FYKMVTYYSXC028289",
        "manufacturer": "Mazda",
        "model": "Ranchero",
        "type": "SUV",
        "age": 65,
        "id": "77",
        "userId": "3"
      }
    ]
  }
  ];

 


  const getUserNameAndVehicleAge = (rawdata) => {

    let result = {
        userNamemap: rawdata.map((item) => item.userName),
        totalAge: rawdata.map((item) => item.vehicle
                                        .map((ageArray) =>ageArray.age
                                        .reduce((acc,car) => acc+car.age)))
    }
   
    
    const promise = new Promise((resolve, reject) =>{

        resolve(result),
        reject(err);
    });
    
   return result;
  };


module.exports = getUserNameAndVehicleAge;
