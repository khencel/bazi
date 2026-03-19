
const gods = [
    "Friends",              //0
    "Rob Wealth",           //1
    "Eating God",           //2
    "Hurting Officer",      //3
    "Indirect Wealth",      //4
    "Direct Wealth",        //5 
    "Seven Killings",       //6
    "Direct Officer",       //7   
    "Indirect Resource",    //8
    "Direct Resource",      //9
]

const godsMap: Record<string, string> = {
  // Jia
  "Jia_Jia": gods[0],
  "Jia_Yi": gods[1],
  "Jia_Bing": gods[2],
  "Jia_Ding": gods[3],
  "Jia_Wu": gods[4],
  "Jia_Ji": gods[5],
  "Jia_Geng": gods[6],
  "Jia_Xin": gods[7],
  "Jia_Ren": gods[8],
  "Jia_Gui": gods[9],


  // Yi
  "Yi_Jia": gods[1],
  "Yi_Yi": gods[0],
  "Yi_Bing": gods[3],
  "Yi_Ding": gods[2],
  "Yi_Wu": gods[5],
  "Yi_Ji": gods[4],
  "Yi_Geng": gods[7],
  "Yi_Xin": gods[6],
  "Yi_Ren": gods[9],
  "Yi_Gui": gods[8],


  //Bing
  "Bing_Jia": gods[8],
  "Bing_Yi": gods[9],
  "Bing_Bing": gods[0],
  "Bing_Ding": gods[1],
  "Bing_Wu": gods[2],
  "Bing_Ji": gods[3],
  "Bing_Geng": gods[4],
  "Bing_Xin": gods[5],
  "Bing_Ren": gods[6],
  "Bing_Gui": gods[7],

  //Ding
  "Ding_Jia": gods[9],
  "Ding_Yi": gods[8],
  "Ding_Bing": gods[1],
  "Ding_Ding": gods[0],
  "Ding_Wu": gods[3],
  "Ding_Ji": gods[2],
  "Ding_Geng": gods[5],
  "Ding_Xin": gods[4],
  "Ding_Ren": gods[7],
  "Ding_Gui": gods[6],

  //Wu
  "Wu_Jia": gods[6],
  "Wu_Yi": gods[7],
  "Wu_Bing": gods[8],
  "Wu_Ding": gods[9],
  "Wu_Wu": gods[0],
  "Wu_Ji": gods[1],
  "Wu_Geng": gods[2],
  "Wu_Xin": gods[3],
  "Wu_Ren": gods[4],
  "Wu_Gui": gods[5],

  //Ji
  "Ji_Jia": gods[7],
  "Ji_Yi": gods[6],
  "Ji_Bing": gods[9],
  "Ji_Ding": gods[8],
  "Ji_Wu": gods[1],
  "Ji_Ji": gods[0],
  "Ji_Geng": gods[3],
  "Ji_Xin": gods[2],
  "Ji_Ren": gods[5],
  "Ji_Gui": gods[4],

  //Geng
  "Geng_Jia": gods[4],
  "Geng_Yi": gods[5],
  "Geng_Bing": gods[6],
  "Geng_Ding": gods[7],
  "Geng_Wu": gods[8],
  "Geng_Ji": gods[9],
  "Geng_Geng": gods[0],
  "Geng_Xin": gods[1],
  "Geng_Ren": gods[2],
  "Geng_Gui": gods[3],

  //Xin
  "Xin_Jia": gods[5],
  "Xin_Yi": gods[4],
  "Xin_Bing": gods[7],
  "Xin_Ding": gods[6],
  "Xin_Wu": gods[9],
  "Xin_Ji": gods[8],
  "Xin_Geng": gods[1],
  "Xin_Xin": gods[0],
  "Xin_Ren": gods[3],
  "Xin_Gui": gods[2],

  //Ren
  "Ren_Jia": gods[2],
  "Ren_Yi": gods[3],
  "Ren_Bing": gods[4],
  "Ren_Ding": gods[5],
  "Ren_Wu": gods[6],
  "Ren_Ji": gods[7],
  "Ren_Geng": gods[8],
  "Ren_Xin": gods[9],
  "Ren_Ren": gods[0],
  "Ren_Gui": gods[1],

  //Gui
  "Gui_Jia": gods[3],
  "Gui_Yi": gods[2],
  "Gui_Bing": gods[5],
  "Gui_Ding": gods[4],
  "Gui_Wu": gods[7],
  "Gui_Ji": gods[6],
  "Gui_Geng": gods[9],
  "Gui_Xin": gods[8],
  "Gui_Ren": gods[1],
  "Gui_Gui": gods[0],
};

export default function GetGods(day_master_stem: string, heavenly_stem: string) {
  return godsMap[`${day_master_stem}_${heavenly_stem}`] ?? null;
}
