interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_msdyn_prod_actioninputparameter_msdyn_parid?: string | null;
  msdyn_productivityactioninputparameterid?: string | null;
  msdyn_productivityparameterdefinitionid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Relationships {
  msdyn_msdyn_prod_actioninputparameter_msdyn_par?: msdyn_productivityparameterdefinition_Result[] | null;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par extends msdyn_msdyn_prod_actioninputparameter_msdyn_par_Base, msdyn_msdyn_prod_actioninputparameter_msdyn_par_Relationships {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Create extends msdyn_msdyn_prod_actioninputparameter_msdyn_par {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Update extends msdyn_msdyn_prod_actioninputparameter_msdyn_par {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select {
  componentidunique: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_msdyn_prod_actioninputparameter_msdyn_parid: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { msdyn_msdyn_prod_actioninputparameter_msdyn_parid: string | null }, {  }>;
  msdyn_productivityactioninputparameterid: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { msdyn_productivityactioninputparameterid: string | null }, {  }>;
  msdyn_productivityparameterdefinitionid: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { msdyn_productivityparameterdefinitionid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_msdyn_prod_actioninputparameter_msdyn_parid: XQW.Guid;
  msdyn_productivityactioninputparameterid: XQW.Guid;
  msdyn_productivityparameterdefinitionid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Expand {
  msdyn_msdyn_prod_actioninputparameter_msdyn_par: WebExpand<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Expand, msdyn_productivityparameterdefinition_Select, msdyn_productivityparameterdefinition_Filter, { msdyn_msdyn_prod_actioninputparameter_msdyn_par: msdyn_productivityparameterdefinition_Result[] }>;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Result extends msdyn_msdyn_prod_actioninputparameter_msdyn_par_Base, msdyn_msdyn_prod_actioninputparameter_msdyn_par_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_RelatedOne {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_RelatedMany {
  msdyn_msdyn_prod_actioninputparameter_msdyn_par: WebMappingRetrieve<msdyn_productivityparameterdefinition_Select,msdyn_productivityparameterdefinition_Expand,msdyn_productivityparameterdefinition_Filter,msdyn_productivityparameterdefinition_Fixed,msdyn_productivityparameterdefinition_Result,msdyn_productivityparameterdefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_prod_actioninputparameter_msdyn_parset: WebMappingRetrieve<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select,msdyn_msdyn_prod_actioninputparameter_msdyn_par_Expand,msdyn_msdyn_prod_actioninputparameter_msdyn_par_Filter,msdyn_msdyn_prod_actioninputparameter_msdyn_par_Fixed,msdyn_msdyn_prod_actioninputparameter_msdyn_par_Result,msdyn_msdyn_prod_actioninputparameter_msdyn_par_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_prod_actioninputparameter_msdyn_parset: WebMappingRelated<msdyn_msdyn_prod_actioninputparameter_msdyn_par_RelatedOne,msdyn_msdyn_prod_actioninputparameter_msdyn_par_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_prod_actioninputparameter_msdyn_parset: WebMappingCUDA<msdyn_msdyn_prod_actioninputparameter_msdyn_par_Create,msdyn_msdyn_prod_actioninputparameter_msdyn_par_Update,msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select>;
}
