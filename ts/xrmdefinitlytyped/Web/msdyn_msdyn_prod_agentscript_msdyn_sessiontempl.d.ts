interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid?: string | null;
  msdyn_productivityagentscriptid?: string | null;
  msdyn_sessiontemplateid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Relationships {
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat?: msdyn_sessiontemplate_Result[] | null;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Base, msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Relationships {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Create extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Update extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select {
  componentidunique: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid: string | null }, {  }>;
  msdyn_productivityagentscriptid: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { msdyn_productivityagentscriptid: string | null }, {  }>;
  msdyn_sessiontemplateid: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { msdyn_sessiontemplateid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid: XQW.Guid;
  msdyn_productivityagentscriptid: XQW.Guid;
  msdyn_sessiontemplateid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Expand {
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: WebExpand<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Expand, msdyn_sessiontemplate_Select, msdyn_sessiontemplate_Filter, { msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: msdyn_sessiontemplate_Result[] }>;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Result extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Base, msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_RelatedOne {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_RelatedMany {
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplat: WebMappingRetrieve<msdyn_sessiontemplate_Select,msdyn_sessiontemplate_Expand,msdyn_sessiontemplate_Filter,msdyn_sessiontemplate_Fixed,msdyn_sessiontemplate_Result,msdyn_sessiontemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset: WebMappingRetrieve<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Expand,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Filter,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Fixed,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Result,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset: WebMappingRelated<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_RelatedOne,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplset: WebMappingCUDA<msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Create,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Update,msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select>;
}
