export var keyset = 'LOSSYSTEM';
export var auth = 'Basic MKqp!ncc2=Ix9Uy=';
export const url = 'http://localhost:8088/los/api'


// New
export const loginURL = url+'/v1/login';
export const baseUrlApp = url+'/v1/application';
export const createapp = baseUrlApp;

//

// export var url = 'https://demo.simpool.id:8088/los/api'
export var suburllistrules = url+'/roules/v1/getlistpage'
export var suburlalllistrules = url+'/roules/v1/getlist'

export var suburllistbusiness = url+'/business/v1/getlist'
export var suburllistreligion = url+'/religion/v1/getlist'

//customer
export var suburlFindCustomer = url+'/customer/v1/findcustomer'

//SyncSimpool
export var suburlSyncLoan = url+'/simpool/v1/syncloanproduct'
export var suburlSendLoan = url+'/simpool/v1/sendloan'
export var suburlSyncLineBusiness = url+'/simpool/v1/synclinebusiness'
export var suburlSyncReligion = url+'/simpool/v1/syncreligion'

//user
export var suburlLogin = url+'/user/v1/login'
export var suburlLogout = url+'/user/v1/logout'
export var suburlListUser = url+'/user/v1/getlistuserbyusertype'
export var suburlSaveUser = url+'/user/v1/create'
export var suburlUpdateUser = url+'/user/v1/update'
export var suburlDeleteUser = url+'/user/v1/delete'

//Dashboard
export var suburllistgraph = url+'/loan/products/v1/getlistgraph'
export var suburllisttopfive = url+'/loan/products/v1/getlisttopfive'
export var suburllistrangesize = url+'/loan/products/v1/getlistrangesize'

//Filter
export var suburllistrulesfilter = url+'/filter/v1/getlistfilterbypage'
export var suburllistrulesfilterdetail = url+'/filter/v1/getdetail'
export var suburlupdatefilter = url+'/filter/v1/update'
export var suburlcreatefilter = url+'/filter/v1/create'
export var suburldeletefilter = url+'/filter/v1/delete'

//Underwriting
export var suburlupdatestatus = url+'/loan/application/status/v1/updatestatus'
export var suburllistunderwritingpage = url+'/loan/application/v1/getlistunderwritingpage'

//Application
export var suburllistappv1 = url+'/loan/application/v1/getlist'
export var suburllistappv2 = url+'/loan/application/v1/getlistapplication'
export var suburlcreateapp = url+'/loan/application/v1/create'
export var suburlsubmitapp = url+'/loan/application/v1/update'

// http://localhost:8080/loan/application/status/v1/updatestatus
export var suburllistunderwriting = url+'/loan/application/v1/getlistunderwriting'
export var suburllistrejected = url+'/loan/application/v1/getlistrejected'
export var suburllistapprove = url+'/loan/application/v1/getlistapprove'
export var suburllistfilter = url+'/loan/application/v1/getlistfilter'
export var suburllistsend = url+'/loan/application/v1/getlistsend'

//Loan
export var suburllistloan_simpool = url+'/simpool/v1/getlistloanproductssimpool'
export var suburllistloan = url+'/loan/products/v1/getlist'
export var suburlfilterlist = url+'/filter/v1/getlistfilter'
export var suburlloanprodupdate = url+'/loan/products/v1/update'
export var suburlloanprodcreate = url+'/loan/products/v1/create'
export var suburlloanproddelete = url+'/loan/products/v1/delete'

//Province
export var suburllistprovince = url+'/province/v1/getlist'
export var suburllistcity = url+'/province/v1/getlistkota'
export var suburllistdistrict = url+'/province/v1/getlistkecamatan'
export var suburlgetkodepos = url+'/province/v1/getkodepos'
export var suburllistkelurahanv1 = url+'/province/v1/getlistkelurahanv1'

//bank
export var suburlbank = url+'/bank/v1/getlist'
export var suburlbankupdate = url+'/bank/v1/update'
export var suburlbankcreate = url+'/bank/v1/create'
export var suburlbankdelete = url+'/bank/v1/delete'

//File
export var suburlmultiplefile = url+'/file/v1/multipleuploadFile'

//RoulesScoring
export var suburlroulesscoringcreate = url+'/roules/v1/create'
export var suburlroulesscoringupdate = url+'/roules/v1/update'
export var suburlroulesscoringdelete = url+'/roules/v1/delete'

//risklevel
export var suburllistrisklevel = url+'/risklevel/v1/getlist'
export var suburllistrisklevelupdate = url+'/risklevel/v1/update'
export var suburllistrisklevelcreate = url+'/risklevel/v1/create'
export var suburllistriskleveldelete = url+'/risklevel/v1/delete'
