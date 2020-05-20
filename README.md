# How to find least transformations number between two 4 letter English words
## Task description
This task can be asked during hiring interview, e.g. in Amazon Web Services (AWS). 
The task is following:
There is a known set of all English words consisting of 4 letters.
What is minimal transformations number from word "POOL" to word "SEAL"?
A transformation is a one letter change in the word that produces another word.

In this repository you can find my solution of this task.

## Usage
This is a NodeJS console application.
1. `npm install`
2. `npm start`

See console output.

## How change input parameters
Open `src/index.ts` file. Change values for constants `fromWord` and `toWord`, e.g.
```typescript
const fromWord = "ABBA";
const toWord = "ROCK";
```

## Output/results
Sample of output:

`Minimal transformation number from "POOL" to "SEAL" is 141: POOL->BOOL->BOIL->BAIL->BAAL->BAAS->BACS->BACH->BACK->BALK->BALD->BALE->BABE->BABA->BABU->BABY->GABY->GABS->CABS->CAAS->CADS->BADS->BADE->BAKE->BANE->BANC->BAND->BANG->BANI->BANK->BANS->BAGS->BAGH->BASH->BASE->BARE->BARB->BARD->BARF->BAFF->BAFT->BAHT->BAHU->BAJU->BALU->BALL->BAEL->BAWL->BAWD->BAUD->BAUK->BARK->BARM->BALM->BALS->AALS->AAHS->DAHS->DABS->DADS->DADA->DADO->DAGO->DAGS->CAGS->CAGE->CADE->CADI->CAPI->CAPA->CABA->CACA->CACK->CALK->CALF->CAFF->CAFE->CAKE->CAKY->CAGY->CANY->CANE->CAME->CAMA->CAMO->CALO->CALL->CALM->CALP->CALX->FALX->FAIX->FAIK->FAIL->FAIN->CAIN->CAID->CARD->CARB->CARE->CAPE->CAPH->CAPO->CAPS->BAPS->BAMS->BARS->BARN->BARP->BURP->BUMP->BUMF->BUFF->BIFF->BOFF->BOYF->BOYG->BONG->BING->BIGG->BIGA->AIGA->AIDA->AIDE->AIDS->ADDS->ADDY->ADRY->AERY->AERO->CERO->CERE->BERE->BEDE->BEDS->BEDU->BEAU->BEAD->BEAK->BEAM->SEAM->SEAL`