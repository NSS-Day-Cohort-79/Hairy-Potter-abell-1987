// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js';
import { potteryList } from './PotteryList.js';

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 5)
let bowl = makePottery("bowl", 7, 3)
let stein = makePottery("stein", 10, 6)
let tangine = makePottery("tangine", 15, 8)
let statue = makePottery("statue", 100, 50)


// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1800)
const firedBowl = firePottery(bowl, 2000)
const firedStein = firePottery(stein, 1900)
const firedTangine = firePottery(tangine, 2100)
const firedStatue = firePottery(statue, 2205)
// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedStein)
toSellOrNotToSell(firedTangine)
toSellOrNotToSell(firedStatue)

// Invoke the component function that renders the HTML list
potteryList();