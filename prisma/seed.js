import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const games = [
    {
      "gametime": "2022-11-20T16:00:00Z",
      "homeTeam": "cat",
      "awayTeam": "equ"
    },
    {
      "gametime": "2022-11-21T13:00:00Z",
      "homeTeam": "ing",
      "awayTeam": "ira"
    },
    {
      "gametime": "2022-11-21T16:00:00Z",
      "homeTeam": "sen",
      "awayTeam": "hol"
    },
    {
      "gametime": "2022-11-21T19:00:00Z",
      "homeTeam": "eua",
      "awayTeam": "gal"
    },
    {
      "gametime": "2022-11-22T10:00:00Z",
      "homeTeam": "arg",
      "awayTeam": "ara"
    },
    {
      "gametime": "2022-11-22T13:00:00Z",
      "homeTeam": "din",
      "awayTeam": "tun"
    },
    {
      "gametime": "2022-11-22T16:00:00Z",
      "homeTeam": "mex",
      "awayTeam": "pol"
    },
    {
      "gametime": "2022-11-22T19:00:00Z",
      "homeTeam": "fra",
      "awayTeam": "aus"
    },
    {
      "gametime": "2022-11-23T10:00:00Z",
      "homeTeam": "mar",
      "awayTeam": "cro"
    },
    {
      "gametime": "2022-11-23T13:00:00Z",
      "homeTeam": "ale",
      "awayTeam": "jap"
    },
    {
      "gametime": "2022-11-23T16:00:00Z",
      "homeTeam": "esp",
      "awayTeam": "cos"
    },
    {
      "gametime": "2022-11-23T19:00:00Z",
      "homeTeam": "bel",
      "awayTeam": "can"
    },
    {
      "gametime": "2022-11-24T10:00:00Z",
      "homeTeam": "sui",
      "awayTeam": "cam"
    },
    {
      "gametime": "2022-11-24T13:00:00Z",
      "homeTeam": "uru",
      "awayTeam": "cor"
    },
    {
      "gametime": "2022-11-24T16:00:00Z",
      "homeTeam": "por",
      "awayTeam": "gan"
    },
    {
      "gametime": "2022-11-24T19:00:00Z",
      "homeTeam": "bra",
      "awayTeam": "ser"
    },
    {
      "gametime": "2022-11-25T10:00:00Z",
      "homeTeam": "gal",
      "awayTeam": "ira"
    },
    {
  
      "gametime": "2022-11-25T13:00:00Z",
      "homeTeam": "cat",
      "awayTeam": "sen"
    },
    {
      "gametime": "2022-11-25T16:00:00Z",
      "homeTeam": "hol",
      "awayTeam": "equ"
    },
    {
      "gametime": "2022-11-25T19:00:00Z",
      "homeTeam": "ing",
      "awayTeam": "eua"
    },
    {
      "gametime": "2022-11-26T10:00:00Z",
      "homeTeam": "tun",
      "awayTeam": "aus"
    },
    {
  
      "gametime": "2022-11-26T13:00:00Z",
      "homeTeam": "pol",
      "awayTeam": "ara"
    },
    {
      "gametime": "2022-11-26T16:00:00Z",
      "homeTeam": "fra",
      "awayTeam": "din"
    },
    {
      "gametime": "2022-11-26T19:00:00Z",
      "homeTeam": "arg",
      "awayTeam": "mex"
    },
    {
      "gametime": "2022-11-27T10:00:00Z",
      "homeTeam": "jap",
      "awayTeam": "cos"
    },
    {
      "gametime": "2022-11-27T13:00:00Z",
      "homeTeam": "bel",
      "awayTeam": "mar"
    },
    {
      "gametime": "2022-11-27T16:00:00Z",
      "homeTeam": "cro",
      "awayTeam": "can"
    },
    {
      "gametime": "2022-11-27T19:00:00Z",
      "homeTeam": "esp",
      "awayTeam": "sui"
    },
    {
      "gametime": "2022-11-28T10:00:00Z",
      "homeTeam": "cam",
      "awayTeam": "ser"
    },
    {
      "gametime": "2022-11-28T13:00:00Z",
      "homeTeam": "cor",
      "awayTeam": "gan"
    },
    {
      "gametime": "2022-11-28T16:00:00Z",
      "homeTeam": "bra",
      "awayTeam": "sui"
    },
    {
      "gametime": "2022-11-28T19:00:00Z",
      "homeTeam": "por",
      "awayTeam": "uru"
    },
    {
      "gametime": "2022-11-29T15:00:00Z",
      "homeTeam": "equ",
      "awayTeam": "sen"
    },
    {
      "gametime": "2022-11-29T15:00:00Z",
      "homeTeam": "hol",
      "awayTeam": "cat"
    },
    {
      "gametime": "2022-11-29T19:00:00Z",
      "homeTeam": "gal",
      "awayTeam": "ing"
    },
    {
      "gametime": "2022-11-29T19:00:00Z",
      "homeTeam": "ira",
      "awayTeam": "eua"
    },
    {
      "gametime": "2022-11-30T15:00:00Z",
      "homeTeam": "aus",
      "awayTeam": "din"
    },
    {
      "gametime": "2022-11-30T15:00:00Z",
      "homeTeam": "tun",
      "awayTeam": "fra"
    },
    {
      "gametime": "2022-11-30T19:00:00Z",
      "homeTeam": "pol",
      "awayTeam": "arg"
    },
    {
      "gametime": "2022-11-30T19:00:00Z",
      "homeTeam": "ara",
      "awayTeam": "mex"
    },
    {
      "gametime": "2022-12-01T15:00:00Z",
      "homeTeam": "cro",
      "awayTeam": "bel"
    },
    {
      "gametime": "2022-12-01T15:00:00Z",
      "homeTeam": "can",
      "awayTeam": "mar"
    },
    {
      "gametime": "2022-12-01T19:00:00Z",
      "homeTeam": "jap",
      "awayTeam": "esp"
    },
    {
      "gametime": "2022-12-01T19:00:00Z",
      "homeTeam": "cos",
      "awayTeam": "ale"
    },
    {
      "gametime": "2022-12-02T15:00:00Z",
      "homeTeam": "gan",
      "awayTeam": "uru"
    },
    {
      "gametime": "2022-12-02T15:00:00Z",
      "homeTeam": "cor",
      "awayTeam": "por"
    },
    {
      "gametime": "2022-12-02T19:00:00Z",
      "homeTeam": "ser",
      "awayTeam": "sui"
    },
    {
      "gametime": "2022-12-02T19:00:00Z",
      "homeTeam": "cam",
      "awayTeam": "bra"
    }
  ]
const main = () => 
    prisma.game.createMany({
        data: games
})


  main()
  .then(console.log)
  .catch(console.log)