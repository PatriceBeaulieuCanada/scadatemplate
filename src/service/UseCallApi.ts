import axios from 'axios';
import queryString from 'query-string';


const url = 'http://localhost:5001'
//const url = 'http://itvxscada:5001'

export const UseCallApi = async (param:any)=>{

    if(param.action==='GetAnalyse') {


		const params ={
			date1:param.date1,
			date2:param.date2,
			tufter:param.tufter
		}

		//console.log(params)

        try {
			const listAnalyse = await axios.get(url+'/api/TufterAnalyse/GetAnalyseFromEmployee?'+queryString.stringify(params));		
			return listAnalyse.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}        
    }

    if(param.action==='GetTufftingEfficiencies') {


		const params ={
			date1:param.date1,
			date2:param.date2
		}

		//console.log(params)

        try {
			const listEfficiency = await axios.get(url+'/api/TufterAnalyse/GetTufftingEfficiencies?'+queryString.stringify(params));		
			return listEfficiency.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}        
    }

	if(param.action==='GetTufftingStandard') {

        try {
			const listStandard = await axios.get(url+'/api/TufterAnalyse/GetTufftingStandard');		
			return listStandard.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}        
    }
    
    if(param.action==='GetTufftingTimeProd') {


		const params ={
			date1:param.date1,
			date2:param.date2
		}

		//console.log(params)

        try {
			const listTimeProd = await axios.get(url+'/api/TufterAnalyse/GetTufftingStatsByQuart?'+queryString.stringify(params));		
			return listTimeProd.data;
		} catch (err) {
			// Handle Error Here
			console.error(err);
			return [];
		}        
    }
    
    
}