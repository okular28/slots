export const RendererConfig = {
    reelAmount: 5,
    symbolAmount: 9,
    reelLength: 50,
    symbolHeight: 180,
    reelIndex: 0,
    symbolConfig: [
        {
            id: 0,
            name: "Diamond",
        },
        {
            id: 1,
            name: "Emerald",
        },
        {
            id: 2,
            name: "Alexandrite",
        },
        {
            id: 3,
            name: "Rubin",
        },
        {
            id: 4,
            name: "Opal",
        },
        {
            id: 5,
            name: "Sapphire",
        },
        {
            id: 6,
            name: "Tanzanite",
        },
        {
            id: 7,
            name: "Topaz",
        },
        {
            id: 8,
            name: "Amethyst",
        }
    ],
    /* Reel jest stackiem */
    reelSet: [],
    /* Masz reel set który renderuje sie od razu po odpaleniu gry
       masz zmienną reelIndex która mówi Ci na jakiej pozycji jesteś aktualnie reelsem, czyli pierwszy row od góry
       np. reelIndex = 25,
       1. masz numer 25A
       2. losujesz ilość wyświetlanych liczb od 0 do 9
       3. zanim reelsy przestaną się losować wybierasz sobie kolejny reelIndex i wrzucasz te 3 liczby zaraz po tym indeksie
          np. losujesz reelIndex 10, OSOBNO losujesz 3 liczby z symbolConfig tak żeby zgadzały sie z winami i prawodpobieństwem i wrzucasz je zaraz po wylosowanym reelIndexie
       4.

    */
}

export const RendererObject = {

}