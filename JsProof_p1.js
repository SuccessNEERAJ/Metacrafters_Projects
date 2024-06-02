// Create a variable to hold your NFTs
const NFTS = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(characterName, magicType, grimoirePages, squad, rank, specialAbility) {
    const NFT = {
        characterName: characterName,
        magicType: magicType,
        grimoirePages: grimoirePages,
        squad: squad,
        rank: rank,
        specialAbility: specialAbility,
    }
    console.log("Minted: " + characterName);
    NFTS.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTS() {
    for(let i = 0; i < NFTS.length; i++){
        console.table(NFTS[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT's: " + NFTS.length);
}

// Minting NFTs
mintNFT("Asta", "Anti-Magic", 5, "Black Bulls", "Junior Magic Knight", "Demon-Dweller Sword");
mintNFT("Yuno", "Wind Magic", 4, "Golden Dawn", "Senior Magic Knight", "Spirit Dive");
mintNFT("Noelle Silva", "Water Magic", 3, "Black Bulls", "Junior Magic Knight", "Sea Dragon's Roar");
mintNFT("Mimosa Vermillion", "Plant Magic", 3, "Golden Dawn", "Junior Magic Knight", "Magic Flower Guidepost");
mintNFT("Luck Voltia", "Lightning Magic", 3, "Black Bulls", "Junior Magic Knight", "Thunderclap Crumbling Orb");
mintNFT("Charmy Pappitson", "Cotton Magic", 3, "Black Bulls", "Junior Magic Knight", "Food Magic");

// call your functions below this line
listNFTS();
getTotalSupply();
