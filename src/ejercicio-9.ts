function ataque(pokA: string, pokB: string, ataqA: number, defB: number) {
    let sup_efec = 50 * (ataqA/defB) * 2;
    let poc_efec = 50 * (ataqA/defB) * 0.5;
    let norm_ = 50 * (ataqA/defB);

    switch(pokA) {
        case `fuego`: {
           if(pokB == `hierba`) {
               return sup_efec;
           }else if((pokB == `agua`) || (pokB == `fuego`)) {
                return poc_efec;
           }else {
               return norm_;
           }
        }

        case `agua`: {
            if((pokB == `hierba`) || (pokB == `agua`) || (pokB == `electrico`)) {
                return poc_efec;
            }else {
                return sup_efec;
            }
        }

        case `hierba`: {
            if((pokB == `fuego`) || (pokB == `hierba`)) {
                return poc_efec;
            }else if (pokB == `agua`) {
                return sup_efec;
            }else {
                return norm_;
            }
        }

        case `electrico`: {
            if((pokB == `hierba`) || (pokB == `fuego`)) {
                return norm_;
            }else if (pokB == `electrico`) {
                return poc_efec;
            }else {
                return sup_efec;
            }
        }
    }
}
const pok1 = `fuego`;
const pok2 = `agua`;
const pok3 = `hierba`;
const pok4 = `electrico`;

const batalla1 = ataque(pok1, pok2, 150, 321);
console.log(`Batalla entre ${pok1} y ${pok2} = ${batalla1}`);
