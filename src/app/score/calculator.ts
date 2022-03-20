import { TmplAstTemplate } from "@angular/compiler";

export function rivalRateCalc(total_eval:number[])
{
    var grade_val = [0, 9600, 12000, 14400, 19200, 21600, 26400, 33600, 36000, 40800, 48000,
                    50400, 55200, 62400, 64800, 69600, 76800, 79200, 84000, 91200, 93600,
                    98400, 105600, 108000, 112800,120000,122400,127200,134400,136800,141600,148800,Infinity];


    var cur_val = 0;
    
    for (var i=0; i<total_eval.length; i++)
    {
        cur_val += total_eval[i];
    }


    var selected_index = 0;
    var front_section;
    var back_section;

    for(var i=0; i<grade_val.length; i++)
    {
        if(cur_val<grade_val[i])
        {
            selected_index = i;
            break;
        }
    }

    if(selected_index == 0)
    {
        front_section = 0;
        back_section = 9600;
    }
    else
    {
        front_section = grade_val[selected_index-1];
        back_section = grade_val[selected_index];
    }

    var to_go = cur_val - front_section;
    var cur_partial_sec = Math.floor(to_go/400);
    var num_partial_sec = Math.floor((back_section-front_section)/400);
    var partial_sec_val = 0.04/num_partial_sec;

    var rate = 0.56 + selected_index * 0.04 + Math.round(partial_sec_val * cur_partial_sec * 1000) /1000;


    return rate;


}

