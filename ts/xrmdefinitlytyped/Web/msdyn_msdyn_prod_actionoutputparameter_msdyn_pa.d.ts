interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_msdyn_prod_actionoutputparameter_msdyn_paid?: string | null;
  msdyn_productivityactionoutputparameterid?: string | null;
  msdyn_productivityparameterdefinitionid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Relationships {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa?: msdyn_productivityparameterdefinition_Result[] | null;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Base, msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Relationships {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Create extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Update extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select {
  componentidunique: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_msdyn_prod_actionoutputparameter_msdyn_paid: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { msdyn_msdyn_prod_actionoutputparameter_msdyn_paid: string | null }, {  }>;
  msdyn_productivityactionoutputparameterid: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { msdyn_productivityactionoutputparameterid: string | null }, {  }>;
  msdyn_productivityparameterdefinitionid: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { msdyn_productivityparameterdefinitionid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_msdyn_prod_actionoutputparameter_msdyn_paid: XQW.Guid;
  msdyn_productivityactionoutputparameterid: XQW.Guid;
  msdyn_productivityparameterdefinitionid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Expand {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: WebExpand<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Expand, msdyn_productivityparameterdefinition_Select, msdyn_productivityparameterdefinition_Filter, { msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: msdyn_productivityparameterdefinition_Result[] }>;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Result extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Base, msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_RelatedOne {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_RelatedMany {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_pa: WebMappingRetrieve<msdyn_productivityparameterdefinition_Select,msdyn_productivityparameterdefinition_Expand,msdyn_productivityparameterdefinition_Filter,msdyn_productivityparameterdefinition_Fixed,msdyn_productivityparameterdefinition_Result,msdyn_productivityparameterdefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_paset: WebMappingRetrieve<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Expand,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Filter,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Fixed,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Result,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_paset: WebMappingRelated<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_RelatedOne,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_paset: WebMappingCUDA<msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Create,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Update,msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select>;
}
