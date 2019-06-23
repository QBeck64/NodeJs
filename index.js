const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', function (req, res) {
    var packageType = req.query.package;
    var weight = req.query.weight;
    var cost = doMath(packageType, weight);

    var packageName = getPackageName(packageType);

    var params = {
      packageName: packageName, weight: weight, cost: cost
    }
    res.render('pages/view', params)

  })
  
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

function getPackageName(packageType) {
  switch (packageType) {
    case 'stamp': return 'Stamped Letter';
      break;
    case 'meter': return 'Metered Letter';
      break;
    case 'flat': return 'Flat Large Envelope';
      break;
    case 'retail': return 'Retail First-Clase Package';
      break;
    default: ;
    }
  }
  
// Take weight and packagetype, perform weight cost assignment based off packageType
function doMath(packageType, weight) {
  if (packageType == 'stamp') {
    return stampCost(weight);
  } else if (packageType == 'meter') {
    return meterCost(weight);
  } else if (packageType == 'flat') {
    return flatCost(weight);
  } else if (packageType == 'retail') {
    return retailCost(weight);
  }
}
  
// function for each package type, uses Switch statements to return the correct postage cost
function stampCost(weight) {
  switch (true) {
    case (weight <= 1): return '0.55';
      break;
    case (weight <= 2): return '0.70';
      break;
    case (weight <= 3): return '0.85';
      break;
    case (weight <= 3.5): return '1.00';
    break;
    default: return "Weight to high, please select a different package type";
  }
  
}

function meterCost(weight) {
  switch (true) {
    case (weight <= 1): return '0.50';
      break;
    case (weight <= 2): return '0.65';
      break;
    case (weight <= 3): return '0.80';
      break;
    case (weight <= 3.5): return '0.95';
      break;
    default: return "Weight to high, please select a different package type";
  }
}

function flatCost(weight) {
  switch (true) {
    case (weight <= 1): return '1.00';
      break;
    case (weight <= 2): return '1.15';
      break;
    case (weight <= 3): return '1.30';
      break;
    case (weight <= 4): return '1.45';
      break;
    case (weight <= 5): return '1.60';
      break;
    case (weight <= 6): return '1.75';
      break;
    case (weight <= 7): return '1.90';
      break;
    case (weight <= 8): return '2.05';
      break;
    case (weight <= 9): return '2.20';
      break;
    case (weight <= 10): return '2.35';
      break;
    case (weight <= 11): return '2.50';
      break;
    case (weight <= 12): return '2.65';
      break;
    case (weight <= 13): return '2.80';
      break;
    
    default: return "Weight to high, please select a different package type";
  }
}

function retailCost(weight) {
  switch (true) {
    case (weight <= 1): return '3.60';
      break;
    case (weight <= 2): return '3.60';
      break;
    case (weight <= 3): return '3.60';
      break;
    case (weight <= 4): return '3.60';
      break;
    case (weight <= 5): return '3.78';
      break;
    case (weight <= 6): return '3.96';
      break;
    case (weight <= 7): return '4.14';
      break;
    case (weight <= 8): return '4.32';
      break;
    case (weight <= 9): return '4.50';
      break;
    case (weight <= 10): return '4.68';
      break;
    case (weight <= 11): return '4.86';
      break;
    case (weight <= 12): return '5.04';
      break;
    case (weight <= 13): return '5.22';
      break;
    case (weight <= 16): return '8.68';
      break;
    case (weight <= 32): return '10.28'
    
    default: return "Weight to high, bummer man";
  }
}