interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Base extends WebEntity {
  msdyn_consoleapplicationtypeid?: string | null;
  msdyn_consoleappparameterdefinitionid?: string | null;
  msdyn_msdyn_consoleapplicationtype_msdyn_consid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Relationships {
  msdyn_msdyn_consoleapplicationtype_msdyn_consol?: msdyn_consoleappparameterdefinition_Result[] | null;
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons extends msdyn_msdyn_consoleapplicationtype_msdyn_cons_Base, msdyn_msdyn_consoleapplicationtype_msdyn_cons_Relationships {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Create extends msdyn_msdyn_consoleapplicationtype_msdyn_cons {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Update extends msdyn_msdyn_consoleapplicationtype_msdyn_cons {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select {
  msdyn_consoleapplicationtypeid: WebAttribute<msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select, { msdyn_consoleapplicationtypeid: string | null }, {  }>;
  msdyn_consoleappparameterdefinitionid: WebAttribute<msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select, { msdyn_consoleappparameterdefinitionid: string | null }, {  }>;
  msdyn_msdyn_consoleapplicationtype_msdyn_consid: WebAttribute<msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select, { msdyn_msdyn_consoleapplicationtype_msdyn_consid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Filter {
  msdyn_consoleapplicationtypeid: XQW.Guid;
  msdyn_consoleappparameterdefinitionid: XQW.Guid;
  msdyn_msdyn_consoleapplicationtype_msdyn_consid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Expand {
  msdyn_msdyn_consoleapplicationtype_msdyn_consol: WebExpand<msdyn_msdyn_consoleapplicationtype_msdyn_cons_Expand, msdyn_consoleappparameterdefinition_Select, msdyn_consoleappparameterdefinition_Filter, { msdyn_msdyn_consoleapplicationtype_msdyn_consol: msdyn_consoleappparameterdefinition_Result[] }>;
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Result extends msdyn_msdyn_consoleapplicationtype_msdyn_cons_Base, msdyn_msdyn_consoleapplicationtype_msdyn_cons_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_RelatedOne {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_RelatedMany {
  msdyn_msdyn_consoleapplicationtype_msdyn_consol: WebMappingRetrieve<msdyn_consoleappparameterdefinition_Select,msdyn_consoleappparameterdefinition_Expand,msdyn_consoleappparameterdefinition_Filter,msdyn_consoleappparameterdefinition_Fixed,msdyn_consoleappparameterdefinition_Result,msdyn_consoleappparameterdefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_consoleapplicationtype_msdyn_consset: WebMappingRetrieve<msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select,msdyn_msdyn_consoleapplicationtype_msdyn_cons_Expand,msdyn_msdyn_consoleapplicationtype_msdyn_cons_Filter,msdyn_msdyn_consoleapplicationtype_msdyn_cons_Fixed,msdyn_msdyn_consoleapplicationtype_msdyn_cons_Result,msdyn_msdyn_consoleapplicationtype_msdyn_cons_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_consoleapplicationtype_msdyn_consset: WebMappingRelated<msdyn_msdyn_consoleapplicationtype_msdyn_cons_RelatedOne,msdyn_msdyn_consoleapplicationtype_msdyn_cons_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_consoleapplicationtype_msdyn_consset: WebMappingCUDA<msdyn_msdyn_consoleapplicationtype_msdyn_cons_Create,msdyn_msdyn_consoleapplicationtype_msdyn_cons_Update,msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select>;
}
