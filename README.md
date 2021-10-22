# Citywise AQI dashboard
This dashboard lets user to get idea about the air quality of indian metro cities.

## Getting Started
* [URL](https://saxenaa218.github.io/aqi-dashboard/)

## Implementation Approach
#### Sample State Object skeleton
* HistoryObject (State structure responsible for table and chart data).
* Cities as keys and queue as values (queue's last element gets visible in Table as it is the latest ones).
* Queue has maximum length of 10 for being lightweight.
* Below is a sample history object
```
    {
        "Delhi": [
          {
            "city": "Delhi",
            "aqi": 303.9955573644944,
            "timeStamp": 23
          },
          {
            "city": "Delhi",
            "aqi": 303.0473196100626,
            "timeStamp": 1111111
          }
        ],
        "Mumbai": [
          {
            "city": "Mumbai",
            "aqi": 180.4532880409185,
            "timeStamp": 23433
          }
        ],
        "Bengaluru": [
          {
            "city": "Bengaluru",
            "aqi": 90.23942071701057,
            "timeStamp": 2343223
          }
        ]
    }
```
* Implemented a table with the latest AQI of a city
* Implemented a chart with at max 10 most recent AQI's of every city.
** whenever any city's AQI queue gets with length 10 old most one gets removed

### Installing
* Fork this repository from below link.
  [Repository](https://github.com/Saxenaa218/aqi-dashboard)
* Clone the repo using
  ```
    git clone <link to forked repo>
  ```
* Change directory
  ```
    cd <Folder Name>
  ```
* Install dependencies
  ```
    npm install
  ```
* Run app
  ```
    npm start
  ```

## Authors
[@saxenaa218](https://github.com/saxenaa218)

## Acknowledgments
* [Highcharts](https://www.highcharts.com/)
