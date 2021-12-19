interface WorkflowWaitSubscription_Base extends WebEntity {
  data?: string | null;
  entityid?: string | null;
  entityname?: string | null;
  isdeleted?: boolean | null;
  ismodified?: boolean | null;
  modifiedon?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  waitonattributelist?: string | null;
  workflowwaitsubscriptionid?: string | null;
}
interface WorkflowWaitSubscription_Relationships {
  userentityinstancedata_workflowwaitsubscription?: UserEntityInstanceData_Result[] | null;
}
interface WorkflowWaitSubscription extends WorkflowWaitSubscription_Base, WorkflowWaitSubscription_Relationships {
}
interface WorkflowWaitSubscription_Create extends WorkflowWaitSubscription {
  asyncoperationid_bind$asyncoperations?: string | null;
}
interface WorkflowWaitSubscription_Update extends WorkflowWaitSubscription {
}
interface WorkflowWaitSubscription_Select {
  asyncoperationid_guid: WebAttribute<WorkflowWaitSubscription_Select, { asyncoperationid_guid: string | null }, { asyncoperationid_formatted?: string }>;
  data: WebAttribute<WorkflowWaitSubscription_Select, { data: string | null }, {  }>;
  entityid: WebAttribute<WorkflowWaitSubscription_Select, { entityid: string | null }, {  }>;
  entityname: WebAttribute<WorkflowWaitSubscription_Select, { entityname: string | null }, {  }>;
  isdeleted: WebAttribute<WorkflowWaitSubscription_Select, { isdeleted: boolean | null }, {  }>;
  ismodified: WebAttribute<WorkflowWaitSubscription_Select, { ismodified: boolean | null }, {  }>;
  modifiedon: WebAttribute<WorkflowWaitSubscription_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  ownerid_guid: WebAttribute<WorkflowWaitSubscription_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<WorkflowWaitSubscription_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<WorkflowWaitSubscription_Select, { owninguser: string | null }, {  }>;
  waitonattributelist: WebAttribute<WorkflowWaitSubscription_Select, { waitonattributelist: string | null }, {  }>;
  workflowwaitsubscriptionid: WebAttribute<WorkflowWaitSubscription_Select, { workflowwaitsubscriptionid: string | null }, {  }>;
}
interface WorkflowWaitSubscription_Filter {
  asyncoperationid_guid: XQW.Guid;
  data: string;
  entityid: XQW.Guid;
  entityname: string;
  isdeleted: boolean;
  ismodified: boolean;
  modifiedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  waitonattributelist: string;
  workflowwaitsubscriptionid: XQW.Guid;
}
interface WorkflowWaitSubscription_Expand {
  asyncoperationid: WebExpand<WorkflowWaitSubscription_Expand, AsyncOperation_Select, AsyncOperation_Filter, { asyncoperationid: AsyncOperation_Result }>;
  userentityinstancedata_workflowwaitsubscription: WebExpand<WorkflowWaitSubscription_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_workflowwaitsubscription: UserEntityInstanceData_Result[] }>;
}
interface WorkflowWaitSubscription_FormattedResult {
  asyncoperationid_formatted?: string;
  modifiedon_formatted?: string;
  ownerid_formatted?: string;
}
interface WorkflowWaitSubscription_Result extends WorkflowWaitSubscription_Base, WorkflowWaitSubscription_Relationships {
  "@odata.etag": string;
  asyncoperationid_guid: string | null;
  ownerid_guid: string | null;
}
interface WorkflowWaitSubscription_RelatedOne {
  asyncoperationid: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
}
interface WorkflowWaitSubscription_RelatedMany {
  userentityinstancedata_workflowwaitsubscription: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  workflowwaitsubscriptions: WebMappingRetrieve<WorkflowWaitSubscription_Select,WorkflowWaitSubscription_Expand,WorkflowWaitSubscription_Filter,WorkflowWaitSubscription_Fixed,WorkflowWaitSubscription_Result,WorkflowWaitSubscription_FormattedResult>;
}
interface WebEntitiesRelated {
  workflowwaitsubscriptions: WebMappingRelated<WorkflowWaitSubscription_RelatedOne,WorkflowWaitSubscription_RelatedMany>;
}
interface WebEntitiesCUDA {
  workflowwaitsubscriptions: WebMappingCUDA<WorkflowWaitSubscription_Create,WorkflowWaitSubscription_Update,WorkflowWaitSubscription_Select>;
}
