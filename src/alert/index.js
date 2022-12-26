import React, { Component } from 'react';

// TODO: thông báo ngay dưới màn hình. 
// Cần 2 biến để hoạt động: 
// * action: object mang thông tin định dạng VÍ DỤ như sau:
// {alert:"alert-danger", mes: "Thành công", show:true}
// * closeAlert: mang giá trị true false. 
/******************************************************************************************
 *                 ĐỂ GỌI ĐƯỢC ALERT. KHỞI TẠO STATE FUNCTION COMPONENT:                  *
 * CONST {ALERT,SETALERT} = USESTATE({ALERT:"ALERT-DANGER",MES:"THÀNH CÔNG",SHOW:"TRUE"}) *
 *           KÍCH HOẠT BẰNG FUNCTION VÀ SOMEFUNCTION((VALUE)=>SETSTATE(VALUE));           *
 *                 TẠO HÀM CLOSEALERT ĐỂ SET LẠI GIÁ TRỊ SHOW CHO STATE.                  *
 ******************************************************************************************/
// TODO: nơi gọi alert
// this.props.handleAlert({
//     alert:"alert-danger",
//     mes: "Đã xóa",
//     show: true,
// })
class Alert extends Component {

    render() {
        const { action, closeAlert } = this.props;
        return (
            <>
                <div
                    className={`alert ${action.alert} alert-dismissible fade ${action.show ? "show" : ""} fixed-bottom`}
                    role="alert">
                    <button
                        onClick={() => closeAlert(false)}
                        type="button"
                        className="close"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                    <strong>{action.mes}</strong>
                </div>
                <script>
                    $(".alert").alert();
                </script>
            </>
        );
    }
}

export default Alert;