interface msdyn_componentlayer_Base extends WebEntity {
  msdyn_changes?: string | null;
  msdyn_children?: string | null;
  msdyn_componentid?: string | null;
  msdyn_componentjson?: string | null;
  msdyn_componentlayerid?: string | null;
  msdyn_name?: string | null;
  msdyn_order?: number | null;
  msdyn_overwritetime?: Date | null;
  msdyn_publishername?: string | null;
  msdyn_solutioncomponentname?: string | null;
  msdyn_solutionname?: string | null;
}
interface msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer extends msdyn_componentlayer_Base, msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer_Create extends msdyn_componentlayer {
}
interface msdyn_componentlayer_Update extends msdyn_componentlayer {
}
interface msdyn_componentlayer_Select {
  msdyn_changes: WebAttribute<msdyn_componentlayer_Select, { msdyn_changes: string | null }, {  }>;
  msdyn_children: WebAttribute<msdyn_componentlayer_Select, { msdyn_children: string | null }, {  }>;
  msdyn_componentid: WebAttribute<msdyn_componentlayer_Select, { msdyn_componentid: string | null }, {  }>;
  msdyn_componentjson: WebAttribute<msdyn_componentlayer_Select, { msdyn_componentjson: string | null }, {  }>;
  msdyn_componentlayerid: WebAttribute<msdyn_componentlayer_Select, { msdyn_componentlayerid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_componentlayer_Select, { msdyn_name: string | null }, {  }>;
  msdyn_order: WebAttribute<msdyn_componentlayer_Select, { msdyn_order: number | null }, {  }>;
  msdyn_overwritetime: WebAttribute<msdyn_componentlayer_Select, { msdyn_overwritetime: Date | null }, { msdyn_overwritetime_formatted?: string }>;
  msdyn_publishername: WebAttribute<msdyn_componentlayer_Select, { msdyn_publishername: string | null }, {  }>;
  msdyn_solutioncomponentname: WebAttribute<msdyn_componentlayer_Select, { msdyn_solutioncomponentname: string | null }, {  }>;
  msdyn_solutionname: WebAttribute<msdyn_componentlayer_Select, { msdyn_solutionname: string | null }, {  }>;
}
interface msdyn_componentlayer_Filter {
  msdyn_changes: string;
  msdyn_children: string;
  msdyn_componentid: string;
  msdyn_componentjson: string;
  msdyn_componentlayerid: XQW.Guid;
  msdyn_name: string;
  msdyn_order: number;
  msdyn_overwritetime: Date;
  msdyn_publishername: string;
  msdyn_solutioncomponentname: string;
  msdyn_solutionname: string;
}
interface msdyn_componentlayer_Expand {
}
interface msdyn_componentlayer_FormattedResult {
  msdyn_overwritetime_formatted?: string;
}
interface msdyn_componentlayer_Result extends msdyn_componentlayer_Base, msdyn_componentlayer_Relationships {
  "@odata.etag": string;
}
interface msdyn_componentlayer_RelatedOne {
}
interface msdyn_componentlayer_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_componentlayers: WebMappingRetrieve<msdyn_componentlayer_Select,msdyn_componentlayer_Expand,msdyn_componentlayer_Filter,msdyn_componentlayer_Fixed,msdyn_componentlayer_Result,msdyn_componentlayer_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_componentlayers: WebMappingRelated<msdyn_componentlayer_RelatedOne,msdyn_componentlayer_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_componentlayers: WebMappingCUDA<msdyn_componentlayer_Create,msdyn_componentlayer_Update,msdyn_componentlayer_Select>;
}
