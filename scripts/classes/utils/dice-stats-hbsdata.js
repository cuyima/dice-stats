/**
 * Data object that can be interated over in hbs for Die info
 */
class DIE_SEC_INFO  {
    Is_displ= false;
    Total_Rolls= 0;
    Mean= 0;
    Median= 0;
    Mode= 0;
    StreakIsBlind= false;
    StreakString= "";
    chartClassId= "";
    DiceHeading= "";
}

class ALLDICE_HBS_DATA {
    TOTAL_ROLLS= [];
    IS_DISP= [];
    D2_INFO= [];
    D3_INFO= [];
    D4_INFO= [];
    D6_INFO= [];
    D8_INFO= [];
    D10_INFO= [];
    D12_INFO= [];
    D20_INFO= [];
    D100_INFO= [];

    HBS_DIE_INFO= []; /*{DIE_SEC_INFO[]}*/
}

class D20_HBS_DATA {

}

class TWODX_HBS_DATA {

}

/**
 * Data info for His Miss class that can be easily iterated over as its sys agnostic
 *  */
class HIT_MISS_HBS_DATA {
    // Used to make arrays of info for each roll type
    //      Can store data like ["Untracked Rolls Count", 13] ["Total Rolls Count", 3]
    ROLL_TYPE_INFO = {
        TEXT_STRING: "",
        VALUE: 0
    }

    DEG_SUCCESS_DATA = {
        // Use handlebars helper to convert enum to degree success string
        DEG_SUCCESS_ENUM: 0,

        // Numbor of times we rolled the above degree of success
        NUM_OF_ROLLS: 0,
    }

    ROLL_TYPE_INFO_ARY = [];
    HIT_DATA_ARY = [];
}