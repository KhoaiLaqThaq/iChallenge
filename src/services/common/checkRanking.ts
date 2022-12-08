enum Ranking {
    Iron = 'rank_iron',
    Bronze = 'rank_bronze',
    Silver = 'rank_silver',
    Gold = 'rank_gold',
    Platinum = 'rank_platinum',
    Diamond = 'rank_diamond',
    BroDiamond = 'rank_bro_diamond',
    Master = 'rank_master',
    Grandmaster = 'rank_grandmaster'
}

export function checkRanking (exp: number) {
    if (!isNaN(exp)) {
        if (exp >= 0 && exp < 200) {
            return Ranking.Iron;
        } else if (exp >= 200 && exp < 400) {
            return Ranking.Bronze;
        } else if (exp >= 400 && exp < 1000) {
            return Ranking.Silver;
        } else if (exp >= 1000 && exp < 1800) {
            return Ranking.Gold
        } else if (exp >= 1800 && exp < 3000) {
            return Ranking.Platinum
        } else if (exp >= 3000 && exp < 4800) {
            return Ranking.Diamond
        } else if (exp >= 4800 && exp < 6500) {
            return Ranking.BroDiamond
        } else if (exp >= 6500 && exp < 10000) {
            return Ranking.Master
        } else 
            return Ranking.Grandmaster;
    }
    return Ranking.Iron;
}
