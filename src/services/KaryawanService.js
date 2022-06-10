import axios from 'axios';

const KARYAWAN_API_BASE_URL = "http://localhost:9090/api/v1/karyawans";

class KaryawanService {

    getKaryawans(){
        return axios.get(KARYAWAN_API_BASE_URL);
    }

    createKaryawan(karyawan){
        return axios.post(KARYAWAN_API_BASE_URL, karyawan);
    }

    getKaryawanById(karyawanId){
        return axios.get(KARYAWAN_API_BASE_URL + '/' + karyawanId);
    }

    updateKaryawan(karyawan, karyawanId){
        return axios.put(KARYAWAN_API_BASE_URL + '/' + karyawanId, karyawan);
    }

    deleteKaryawan(karyawanId){
        return axios.delete(KARYAWAN_API_BASE_URL + '/' + karyawanId);
    }
}

export default new KaryawanService()