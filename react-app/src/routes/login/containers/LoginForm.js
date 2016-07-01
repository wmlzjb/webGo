import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../components/LoginForm.jsx'
import { postLogin } from '../../../actions'

const mapStateToProps = (state) => {
    return { data: state.user }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ postLogin }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);