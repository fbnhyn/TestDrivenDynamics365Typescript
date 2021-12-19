interface msdyn_iotdevicecommandparameters_Base extends WebEntity {
  msdyn_iotdevicecommanddefinitionid?: string | null;
  msdyn_iotdevicecommandparametersid?: string | null;
  msdyn_iotpropertydefinitionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_iotdevicecommandparameters_Relationships {
  msdyn_iotdevicecommandparameters?: msdyn_iotpropertydefinition_Result[] | null;
}
interface msdyn_iotdevicecommandparameters extends msdyn_iotdevicecommandparameters_Base, msdyn_iotdevicecommandparameters_Relationships {
}
interface msdyn_iotdevicecommandparameters_Create extends msdyn_iotdevicecommandparameters {
}
interface msdyn_iotdevicecommandparameters_Update extends msdyn_iotdevicecommandparameters {
}
interface msdyn_iotdevicecommandparameters_Select {
  msdyn_iotdevicecommanddefinitionid: WebAttribute<msdyn_iotdevicecommandparameters_Select, { msdyn_iotdevicecommanddefinitionid: string | null }, {  }>;
  msdyn_iotdevicecommandparametersid: WebAttribute<msdyn_iotdevicecommandparameters_Select, { msdyn_iotdevicecommandparametersid: string | null }, {  }>;
  msdyn_iotpropertydefinitionid: WebAttribute<msdyn_iotdevicecommandparameters_Select, { msdyn_iotpropertydefinitionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdevicecommandparameters_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdevicecommandparameters_Filter {
  msdyn_iotdevicecommanddefinitionid: XQW.Guid;
  msdyn_iotdevicecommandparametersid: XQW.Guid;
  msdyn_iotpropertydefinitionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_iotdevicecommandparameters_Expand {
  msdyn_iotdevicecommandparameters: WebExpand<msdyn_iotdevicecommandparameters_Expand, msdyn_iotpropertydefinition_Select, msdyn_iotpropertydefinition_Filter, { msdyn_iotdevicecommandparameters: msdyn_iotpropertydefinition_Result[] }>;
}
interface msdyn_iotdevicecommandparameters_FormattedResult {
}
interface msdyn_iotdevicecommandparameters_Result extends msdyn_iotdevicecommandparameters_Base, msdyn_iotdevicecommandparameters_Relationships {
  "@odata.etag": string;
}
interface msdyn_iotdevicecommandparameters_RelatedOne {
}
interface msdyn_iotdevicecommandparameters_RelatedMany {
  msdyn_iotdevicecommandparameters: WebMappingRetrieve<msdyn_iotpropertydefinition_Select,msdyn_iotpropertydefinition_Expand,msdyn_iotpropertydefinition_Filter,msdyn_iotpropertydefinition_Fixed,msdyn_iotpropertydefinition_Result,msdyn_iotpropertydefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdevicecommandparametersset: WebMappingRetrieve<msdyn_iotdevicecommandparameters_Select,msdyn_iotdevicecommandparameters_Expand,msdyn_iotdevicecommandparameters_Filter,msdyn_iotdevicecommandparameters_Fixed,msdyn_iotdevicecommandparameters_Result,msdyn_iotdevicecommandparameters_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdevicecommandparametersset: WebMappingRelated<msdyn_iotdevicecommandparameters_RelatedOne,msdyn_iotdevicecommandparameters_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdevicecommandparametersset: WebMappingCUDA<msdyn_iotdevicecommandparameters_Create,msdyn_iotdevicecommandparameters_Update,msdyn_iotdevicecommandparameters_Select>;
}
