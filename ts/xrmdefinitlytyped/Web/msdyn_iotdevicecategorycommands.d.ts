interface msdyn_iotdevicecategorycommands_Base extends WebEntity {
  msdyn_iotdevicecategorycommandsid?: string | null;
  msdyn_iotdevicecategoryid?: string | null;
  msdyn_iotdevicecommanddefinitionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_iotdevicecategorycommands_Relationships {
  msdyn_iotdevicecategorycommands?: msdyn_iotdevicecommanddefinition_Result[] | null;
}
interface msdyn_iotdevicecategorycommands extends msdyn_iotdevicecategorycommands_Base, msdyn_iotdevicecategorycommands_Relationships {
}
interface msdyn_iotdevicecategorycommands_Create extends msdyn_iotdevicecategorycommands {
}
interface msdyn_iotdevicecategorycommands_Update extends msdyn_iotdevicecategorycommands {
}
interface msdyn_iotdevicecategorycommands_Select {
  msdyn_iotdevicecategorycommandsid: WebAttribute<msdyn_iotdevicecategorycommands_Select, { msdyn_iotdevicecategorycommandsid: string | null }, {  }>;
  msdyn_iotdevicecategoryid: WebAttribute<msdyn_iotdevicecategorycommands_Select, { msdyn_iotdevicecategoryid: string | null }, {  }>;
  msdyn_iotdevicecommanddefinitionid: WebAttribute<msdyn_iotdevicecategorycommands_Select, { msdyn_iotdevicecommanddefinitionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdevicecategorycommands_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdevicecategorycommands_Filter {
  msdyn_iotdevicecategorycommandsid: XQW.Guid;
  msdyn_iotdevicecategoryid: XQW.Guid;
  msdyn_iotdevicecommanddefinitionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_iotdevicecategorycommands_Expand {
  msdyn_iotdevicecategorycommands: WebExpand<msdyn_iotdevicecategorycommands_Expand, msdyn_iotdevicecommanddefinition_Select, msdyn_iotdevicecommanddefinition_Filter, { msdyn_iotdevicecategorycommands: msdyn_iotdevicecommanddefinition_Result[] }>;
}
interface msdyn_iotdevicecategorycommands_FormattedResult {
}
interface msdyn_iotdevicecategorycommands_Result extends msdyn_iotdevicecategorycommands_Base, msdyn_iotdevicecategorycommands_Relationships {
  "@odata.etag": string;
}
interface msdyn_iotdevicecategorycommands_RelatedOne {
}
interface msdyn_iotdevicecategorycommands_RelatedMany {
  msdyn_iotdevicecategorycommands: WebMappingRetrieve<msdyn_iotdevicecommanddefinition_Select,msdyn_iotdevicecommanddefinition_Expand,msdyn_iotdevicecommanddefinition_Filter,msdyn_iotdevicecommanddefinition_Fixed,msdyn_iotdevicecommanddefinition_Result,msdyn_iotdevicecommanddefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdevicecategorycommandsset: WebMappingRetrieve<msdyn_iotdevicecategorycommands_Select,msdyn_iotdevicecategorycommands_Expand,msdyn_iotdevicecategorycommands_Filter,msdyn_iotdevicecategorycommands_Fixed,msdyn_iotdevicecategorycommands_Result,msdyn_iotdevicecategorycommands_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdevicecategorycommandsset: WebMappingRelated<msdyn_iotdevicecategorycommands_RelatedOne,msdyn_iotdevicecategorycommands_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdevicecategorycommandsset: WebMappingCUDA<msdyn_iotdevicecategorycommands_Create,msdyn_iotdevicecategorycommands_Update,msdyn_iotdevicecategorycommands_Select>;
}
